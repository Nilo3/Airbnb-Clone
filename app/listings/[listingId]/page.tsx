import getCurrentUser from "@/app/actions/getCurrentUser";
import getListingById from "@/app/actions/getListingById";
import ClientOnly from "@/app/components/ClientOnly";
import EmptyState from "@/app/components/EmptyState";
import ListingClient from "./ListingClient";
import getReservations from "@/app/actions/getReservations";

interface IParams {
  listingId?: string,
}

const ListingPage = async ({params}:{params: IParams}) => {
  const listing = await getListingById(params)
  const reservations = await getReservations(params)
  const currentuser = await getCurrentUser()
  
  if(!listing){
    return (
      <ClientOnly>
        <EmptyState />
      </ClientOnly>
    )
  }
  return (
  <div>
    <ClientOnly>
    <ListingClient
    
    reservations={reservations}
    currentUser={currentuser}
    />

    </ClientOnly>
  </div>
  );
};

export default ListingPage;