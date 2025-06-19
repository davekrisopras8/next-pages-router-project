import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "React Conference",
    image:
      "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fylpbd135zx2u4pt1bfka.jpeg",
    addres: "Binus Malang",
    description: "Hooks, Suspense, and Concurrent Rendering",
  },
  {
    id: "m2",
    title: "React Meetups",
    image:
      "https://media.licdn.com/dms/image/v2/D4D22AQEiLWQOqJexiw/feedshare-shrink_800/feedshare-shrink_800/0/1715871221741?e=2147483647&v=beta&t=YSwV9Bs3TQSabNNkZvra2YwxhASY8sksOol2L14IpCc",
    addres: "Universitas Indonesia",
    description:
      "in-depth explorations of cutting-edge React features and testing methodologies to workshops on building r",
  },
  {
    id: "m3",
    title: "React Summit",
    image:
      "https://gitnation.org/content/images/size/w2000/2025/01/20240614092007_TheArrows_React2Summit_0036-copy.jpg",
    addres: "ITB",
    description:
      "summaries of the best React conferences that made it onto my shortlist.",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

// export async function getServerSideProps(context) {
//   const req = context.req
//   const res = context.res

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   }
// }

export async function getStaticProps() {
  // fetch data from an API / Database
  return {
    props: {
      meetups: DUMMY_MEETUPS
    },
    revalidate: 1
  }
}

export default HomePage;

