import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <>
      <MeetupDetail
        image="https://gitnation.org/content/images/size/w2000/2025/01/20240614092007_TheArrows_React2Summit_0036-copy.jpg"
        title="React Conference"
        address="Jakarta"
        description="Hooks, Suspense, and Concurrent Rendering"
      />
    </>
  );
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId

  return {
    props: {
      meetupData: {
        image:
          "https://gitnation.org/content/images/size/w2000/2025/01/20240614092007_TheArrows_React2Summit_0036-copy.jpg",
        id: meetupId,
        title: "React Conference",
        address: "Jakarta",
        description: "Hooks, Suspense, and Concurrent Rendering",
      },
    },
  };
}

export default MeetupDetails;
