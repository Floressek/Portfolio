"use client"
import Link from "next/link";
import {usePathname} from "next/navigation";
const NavLink = ({link}) => {
    const pathName = usePathname();

    console.log(pathName);

    return (
        // If it matches the link then change the color of the link
        <Link className={`rounded p-1 ${pathName === link.href && "bg-black text-white"}`} href={link.href}>
            {link.label}
        </Link>
    )
}

export default NavLink;