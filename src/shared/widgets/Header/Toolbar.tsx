import { useUser } from "@clerk/nextjs";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import Image from 'next/image';
import { useRouter } from "next/navigation";

export const Toolbar = () => {
    const router = useRouter();
    const {user} = useUser()

    return (
        <>
            <Button color="primary" className="text-lg" onClick={user ? () => {router.push('/dashboard')} : () => {}}>
                Start Trial
            </Button>

            {user ? <Link href={`/dashboard`}>
                <Image src={user?.imageUrl} alt='' className="rounded-full" width={40} height={40} />
            </Link>
            : <Link href={`/sign-in`}>Login</Link>}
        </>
    )
}