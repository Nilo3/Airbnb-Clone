"use client";

import { Reservation } from "@prisma/client";
import { SafeListing, SafeUser } from "@/app/types";
import { useMemo } from "react";
import { categories } from "@/app/components/navbar/Categories";
import Container from "@/app/components/Container";
import ListingHead from "../../components/listings/ListingHead";
import ListingInfo from "@/app/components/listings/ListingInfo";

interface ListingClientProps {
  reservations?: Reservation[];
  listing: SafeListing & {
    user: SafeUser;
  };
  currentUser?: SafeUser | null;
}

const ListingClient: React.FC<ListingClientProps> = ({
  listing,
  currentUser,
}) => {
  const category = useMemo(() => {
    return categories.find((item) => item.label === listing.category);
  }, [listing.category]);
  return (
    <Container>
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col gap-6">
          <ListingHead
            id={listing.id}
            title={listing.title}
            imageSrc={listing.imageSrc}
            locationValue={listing.locationValue}
            currentUser={currentUser}
          />
          <div
            className="
          grid 
          grid-cols-1 
          md:grid-cols-7 
          md:gap-10 
          mt-6
          "
          >
            <ListingInfo
              user={listing.user}
              category={category}
              description={listing.description}
              roomCount={listing.roomCount}
              bathroomCount={listing.bathroomCount}
              guestCount={listing.guestCount}
              locationValue={listing.locationValue}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ListingClient;
