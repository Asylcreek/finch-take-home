import { getSession } from '@/lib/auth';

const Homepage = async () => {
  const session = await getSession();

  return <h1>Top of the morning to you {session?.user?.first_name}</h1>;
};

export default Homepage;
