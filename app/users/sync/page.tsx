'use client';

import { useUser } from '@clerk/nextjs';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Query, User } from '../../../fqlx-generated/typedefs';
import { useQuery } from 'fauna-typed';

const Page = () => {
  const { user } = useUser();
  const query = useQuery<Query>();
  const router = useRouter();

  const faunaSavedUser = query.User.firstWhere(
    `(user) => user.clerkId == "${user?.id ?? ''}"`
  ).exec();

  const faunaUser: User = {
    name: user?.fullName ?? '',
    email: user?.primaryEmailAddress?.emailAddress ?? '',
    image: user?.imageUrl ?? '',
    clerkId: user?.id,
    organizations: user?.organizationMemberships,
  };

  const syncUser = async () => {
    if (!faunaSavedUser) {
      const formattedUser = JSON.stringify({
        ...faunaUser,
        activeOrganization: 'Organization.byId("375287427124691152")',
        organizations: ['Organization.byId("375287427124691152")'],
      }).replaceAll(
        /"Organization.byId\(\\"(\d*)\\"\)"/g,
        'Organization.byId("$1")'
      );

      query.User.create(formattedUser).exec();
    }
    router.push('/');
  };

  useEffect(() => {
    syncUser();
  }, []);

  return null;
};

export default Page;
