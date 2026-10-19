import { Link } from "react-router";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "./navigation-menu";

// - Navigation
//   - Dashboard
//   - Survey
//     - All Surveys
//     - Create Survey
//   - Archive
//     - Finished Surveys
//   - Profile
//     - My Surveys
//     - My Responses

export default function Navigation() {
    return (
    <NavigationMenu>
        <NavigationMenuList>
            <NavigationMenuItem>
                <NavigationMenuLink href="/" className="font-medium">Dashboard</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuTrigger>Survey</NavigationMenuTrigger>
                <NavigationMenuContent>
                    <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                        <li className="row-span-2">
                            <NavigationMenuLink render={<Link to="/" />} className="from-muted/50 to-muted flex h-full w-full flex-col justify-center rounded-md bg-linear-to-b no-underline outline-hidden select-none">
                                <div className="text-lg font-medium">shadcn/ui</div>
                                <p className="text-muted-foreground text-sm leading-tight">
                                    Beautifully designed components built with Radix UI and Tailwind CSS.
                                </p>
                            </NavigationMenuLink>
                        </li>
                        <li>
                            <NavigationMenuLink>
                                <Link to="/survey/all">
                                    <div className="text-sm leading-none font-medium">
                                        All surveys
                                    </div>
                                    <p className="text-muted-foreground line-clamp-2 text-sm leading-tight">
                                        List all surveys
                                    </p>
                                </Link>
                            </NavigationMenuLink>
                        </li>
                        <li>
                            <NavigationMenuLink>
                                <Link to="/survey/create">
                                    <div className="text-sm leading-none font-medium">
                                        Create survey
                                    </div>
                                    <p className="text-muted-foreground line-clamp-2 text-sm leading-tight">
                                        Create survey
                                    </p>
                                </Link>
                            </NavigationMenuLink>
                        </li>
                    </ul>
                </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
                <NavigationMenuTrigger>Archive</NavigationMenuTrigger>
                <NavigationMenuContent>
                    <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                        <li className="row-span-2">
                            <NavigationMenuLink render={<Link to="/" />} className="from-muted/50 to-muted flex h-full w-full flex-col justify-center rounded-md bg-linear-to-b no-underline outline-hidden select-none">
                                <div className="text-lg font-medium">shadcn/ui</div>
                                <p className="text-muted-foreground text-sm leading-tight">
                                    Beautifully designed components built with Radix UI and Tailwind CSS.
                                </p>
                            </NavigationMenuLink>
                        </li>
                        <li>
                            <NavigationMenuLink>
                                <Link to="/archive/finished">
                                    <div className="text-sm leading-none font-medium">
                                        Finished surveys
                                    </div>
                                    <p className="text-muted-foreground line-clamp-2 text-sm leading-tight">
                                        Finished surveys
                                    </p>
                                </Link>
                            </NavigationMenuLink>
                        </li>
                    </ul>
                </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
                <NavigationMenuTrigger>Profile</NavigationMenuTrigger>
                <NavigationMenuContent>
                    <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                        <li className="row-span-2">
                            <NavigationMenuLink render={<Link to="/" />} className="from-muted/50 to-muted flex h-full w-full flex-col justify-center rounded-md bg-linear-to-b no-underline outline-hidden select-none">
                                <div className="text-lg font-medium">shadcn/ui</div>
                                <p className="text-muted-foreground text-sm leading-tight">
                                    Beautifully designed components built with Radix UI and Tailwind CSS.
                                </p>
                            </NavigationMenuLink>
                        </li>
                        <li>
                            <NavigationMenuLink>
                                <Link to="/profile/surveys">
                                    <div className="text-sm leading-none font-medium">
                                        My surveys
                                    </div>
                                    <p className="text-muted-foreground line-clamp-2 text-sm leading-tight">
                                        My surveys
                                    </p>
                                </Link>
                            </NavigationMenuLink>
                        </li>
                        <li>
                            <NavigationMenuLink>
                                <Link to="/profile/responses">
                                    <div className="text-sm leading-none font-medium">
                                        My responses
                                    </div>
                                    <p className="text-muted-foreground line-clamp-2 text-sm leading-tight">
                                        My responses
                                    </p>
                                </Link>
                            </NavigationMenuLink>
                        </li>
                    </ul>
                </NavigationMenuContent>
            </NavigationMenuItem>
        </NavigationMenuList>
    </NavigationMenu>
    )
}
