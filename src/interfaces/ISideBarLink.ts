export interface ISideDrawerLink {
    destUrl: string;
    displayText: string;
}

export const sideDrawerLinks: Array<ISideDrawerLink> = [
    {
        destUrl: '/dashboard/create-new-world',
        displayText: 'Create New World'
    },
    {
        destUrl: '/dashboard',
        displayText: 'Dashboard'
    },
    {
        destUrl: '/wiki',
        displayText: 'World Wiki'
    },
    {
        destUrl: '/dashboard/characters',
        displayText: 'Characters'
    },
    {
        destUrl: '/dashboard/regions',
        displayText: 'Regions'
    },
    {
        destUrl: '/dashboard/bestiary',
        displayText: 'Bestiary'
    },
    {
        destUrl: '/dashboard/pantheon',
        displayText: 'Pantheon'
    }
]