"use client"

import { Reservation } from "@prisma/client";
import { SafeListing, SafeUser } from "@/app/types";
import { useMemo } from "react";
import { categories } from "@/app/components/navbar/Categories";
import Container from "@/app/components/Container";
import ListingHead from "../../components/listings/ListingHead";

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
            id={"falopa"}
            title={listing.title}
            imageSrc={listing.imageSrc}
            locationValue={listing.locationValue}
          />
        </div>
      </div>
    </Container>
  );
};

export default ListingClient;
