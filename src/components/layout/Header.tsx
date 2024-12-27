import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuLink, NavigationMenuTrigger, NavigationMenuContent } from '../ui/navigation-menu'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { navItems } from '../../lib/constants/navigation'
import TechIcons from "@/src/components/layout/TechIcons";

export default function Header() {
    return (
        <header className="flex items-center justify-between p-6 relative z-10">
            <div className="flex items-center gap-8">
                <h1 className="text-2xl font-bold">R_INTERFACE</h1>

                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-96 gap-3 p-4">
                                    {navItems.map((item) => (
                                        <li key={item.title}>
                                            <NavigationMenuLink asChild>
                                                <a
                                                    href={item.href}
                                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                                >
                                                    <div className="text-sm font-medium leading-none">{item.title}</div>
                                                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                        {item.description}
                                                    </p>
                                                </a>
                                            </NavigationMenuLink>
                                        </li>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>

            <div className="flex gap-4">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="w-6 h-6 hover:text-blue-400 transition-colors" />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="w-6 h-6 hover:text-gray-400 transition-colors" />
                </a>
            </div>
        </header>
    )
}