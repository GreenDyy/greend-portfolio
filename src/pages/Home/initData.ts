import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';

//link icon nè: https://iconduck.com/icons
// Expert: Chuyên gia
// Advanced: Nâng cao
// Intermediate: Trung cấp
// Beginner: Mới bắt đầu

export interface Tech {
    name: string;
    iconName: string; // Chỉ lưu tên icon, không lưu ReactNode
    startDate: Dayjs;
    experience: string;
}

const coreTechs: Tech[] = [
    {
        name: 'React JS',
        iconName: 'react',
        startDate: dayjs('2020-04-01'),
        experience: 'Advanced'
    },
    {
        name: 'React Native',
        iconName: 'reactNative',
        startDate: dayjs('2021-01-01'),
        experience: 'Intermediate'
    },
    {
        name: 'C#',
        iconName: 'csharp',
        startDate: dayjs('2020-01-01'),
        experience: 'Intermediate'
    },
    {
        name: 'JavaScript',
        iconName: 'javascript',
        startDate: dayjs('2019-06-01'),
        experience: 'Advanced'
    },
    {
        name: 'TypeScript',
        iconName: 'typescript',
        startDate: dayjs('2021-03-01'),
        experience: 'Advanced'
    },
];

const beAndDatabases: Tech[] = [
    {
        name: 'Node.js',
        iconName: 'nodejs',
        startDate: dayjs('2020-06-01'),
        experience: 'Intermediate'
    },
    {
        name: 'ASP.NET Core Web API',
        iconName: 'aspnet',
        startDate: dayjs('2020-01-01'),
        experience: 'Advanced'
    },
    {
        name: 'MongoDB',
        iconName: 'mongodb',
        startDate: dayjs('2020-06-01'),
        experience: 'Intermediate'
    },
    {
        name: 'SQL Server',
        iconName: 'sqlserver',
        startDate: dayjs('2020-01-01'),
        experience: 'Advanced'
    },
];

const tools: Tech[] = [
    {
        name: 'Git',
        iconName: 'git',
        startDate: dayjs('2020-01-01'),
        experience: 'Advanced'
    },
    {
        name: 'GitHub',
        iconName: 'github',
        startDate: dayjs('2020-01-01'),
        experience: 'Advanced'
    },
    {
        name: 'GitLab',
        iconName: 'gitlab',
        startDate: dayjs('2021-01-01'),
        experience: 'Advanced'
    },
    {
        name: 'SourceTree',
        iconName: 'sourcetree',
        startDate: dayjs('2020-06-01'),
        experience: 'Intermediate'
    },
    {
        name: 'Figma',
        iconName: 'figma',
        startDate: dayjs('2021-01-01'),
        experience: 'Beginner'
    },
    {
        name: 'Postman',
        iconName: 'postman',
        startDate: dayjs('2020-06-01'),
        experience: 'Intermediate'
    },
    {
        name: 'Word',
        iconName: 'word',
        startDate: dayjs('2019-01-01'),
        experience: 'Advanced'
    },
    {
        name: 'Excel',
        iconName: 'excel',
        startDate: dayjs('2019-01-01'),
        experience: 'Intermediate'
    },
    {
        name: 'PowerPoint',
        iconName: 'powerpoint',
        startDate: dayjs('2019-01-01'),
        experience: 'Intermediate'
    },
];

export { coreTechs, beAndDatabases, tools }

