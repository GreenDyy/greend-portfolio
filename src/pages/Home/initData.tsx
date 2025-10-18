// import { ReactComponent as ReactIcon } from '../../assets/icons/react.svg';
// import { ReactComponent as ReactNativeIcon } from '../../assets/icons/react-native.svg';
// import { ReactComponent as CsharpIcon } from '../../assets/icons/csharp.svg';
// import { ReactComponent as JavascriptIcon } from '../../assets/icons/javascript.svg';
// import { ReactComponent as TypescriptIcon } from '../../assets/icons/typescript.svg';
// import { ReactComponent as NodejsIcon } from '../../assets/icons/nodejs.svg';
// import { ReactComponent as ASPNETIcon } from '../../assets/icons/aspnet.svg';
// import { ReactComponent as MongodbIcon } from '../../assets/icons/mongodb.svg';
// import { ReactComponent as SqlserverIcon } from '../../assets/icons/sql.svg';
// import { ReactComponent as GitIcon } from '../../assets/icons/git.svg';
// import { ReactComponent as GithubIcon } from '../../assets/icons/github.svg';
// import { ReactComponent as GitlabIcon } from '../../assets/icons/gitlab.svg';
// import { ReactComponent as SourceTreeIcon } from '../../assets/icons/sourcetree.svg';
// import { ReactComponent as FigmaIcon } from '../../assets/icons/figma.svg';
// import { ReactComponent as PostmanIcon } from '../../assets/icons/postman.svg';
// import { ReactComponent as ExcellIcon } from '../../assets/icons/excel.svg';
// import { ReactComponent as PowerPointIcon } from '../../assets/icons/powerpoint.svg';
// import { ReactComponent as WordIcon } from '../../assets/icons/word.svg';

import reactIcon from '../../assets/icons/react.svg';
import reactNativeIcon from '../../assets/icons/react-native.svg';
import csharpIcon from '../../assets/icons/csharp.svg';
import javascriptIcon from '../../assets/icons/javascript.svg';
import typescriptIcon from '../../assets/icons/typescript.svg';
import nodejsIcon from '../../assets/icons/nodejs.svg';
import aspnetIcon from '../../assets/icons/aspnet.svg';
import mongodbIcon from '../../assets/icons/mongodb.svg';
import sqlserverIcon from '../../assets/icons/sql.svg';
import gitIcon from '../../assets/icons/git.svg';
import githubIcon from '../../assets/icons/github.svg';
import gitlabIcon from '../../assets/icons/gitlab.svg';
import sourceTreeIcon from '../../assets/icons/sourcetree.svg';
import figmaIcon from '../../assets/icons/figma.svg';
import postmanIcon from '../../assets/icons/postman.svg';
import excellIcon from '../../assets/icons/excel.svg';
import powerPointIcon from '../../assets/icons/powerpoint.svg';
import wordIcon from '../../assets/icons/word.svg';

import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';
import type { ReactNode } from 'react';

//link icon nè: https://iconduck.com/icons
// Expert: Chuyên gia
// Advanced: Nâng cao
// Intermediate: Trung cấp
// Beginner: Mới bắt đầu

export interface Tech {
    name: string;
    icon?: ReactNode;
    pathIcon?: string;
    startDate: Dayjs;
    experience: string;
}

const coreTechs: Tech[] = [
    {
        name: 'React JS',
        icon: <img src={reactIcon} alt="React Icon" style={{ fill: 'green', width: '40px', height: '40px' }} />,
        startDate: dayjs('2020-04-01'),
        experience: 'Advanced'
    },
    {
        name: 'React Native',
        icon: <img src={reactNativeIcon} alt="React Native Icon" style={{ fill: 'green', width: '40px', height: '40px' }} />,
        startDate: dayjs('2021-01-01'),
        experience: 'Intermediate'
    },
    {
        name: 'C#',
        icon: <img src={csharpIcon} alt="C# Icon" style={{ fill: 'green', width: '40px', height: '40px' }} />,
        startDate: dayjs('2020-01-01'),
        experience: 'Intermediate'
    },
    {
        name: 'JavaScript',
        icon: <img src={javascriptIcon} alt="JavaScript Icon" style={{ fill: 'green', width: '40px', height: '40px' }} />,
        startDate: dayjs('2019-06-01'),
        experience: 'Advanced'
    },
    {
        name: 'TypeScript',
        icon: <img src={typescriptIcon} alt="TypeScript Icon" style={{ fill: 'green', width: '40px', height: '40px' }} />,
        startDate: dayjs('2021-03-01'),
        experience: 'Advanced'
    },
];

const beAndDatabases: Tech[] = [
    {
        name: 'Node.js',
        icon: <img src={nodejsIcon} alt="Node.js Icon" style={{ fill: 'green', width: '40px', height: '40px' }} />,
        startDate: dayjs('2020-06-01'),
        experience: 'Intermediate'
    },
    {
        name: 'ASP.NET Core Web API',
        icon: <img src={aspnetIcon} alt="ASP.NET Core Web API Icon" style={{ fill: 'green', width: '40px', height: '40px' }} />,
        startDate: dayjs('2020-01-01'),
        experience: 'Advanced'
    },
    {
        name: 'MongoDB',
        icon: <img src={mongodbIcon} alt="MongoDB Icon" style={{ fill: 'green', width: '40px', height: '40px' }} />,
        startDate: dayjs('2020-06-01'),
        experience: 'Intermediate'
    },
    {
        name: 'SQL Server',
        icon: <img src={sqlserverIcon} alt="SQL Server Icon" style={{ fill: 'green', width: '40px', height: '40px' }} />,
        startDate: dayjs('2020-01-01'),
        experience: 'Advanced'
    },
];

const tools: Tech[] = [
    {
        name: 'Git',
        icon: <img src={gitIcon} alt="Git Icon" style={{ fill: 'green', width: '40px', height: '40px' }} />,
        startDate: dayjs('2020-01-01'),
        experience: 'Advanced'
    },
    {
        name: 'GitHub',
        icon: <img src={githubIcon} alt="GitHub Icon" style={{ width: '40px', height: '40px', stroke: 'white' }} />,
        startDate: dayjs('2020-01-01'),
        experience: 'Advanced'
    },
    {
        name: 'GitLab',
        icon: <img src={gitlabIcon} alt="GitLab Icon" style={{ fill: 'green', width: '40px', height: '40px' }} />,
        startDate: dayjs('2021-01-01'),
        experience: 'Advanced'
    },
    {
        name: 'SourceTree',
        icon: <img src={sourceTreeIcon} alt="SourceTree Icon" style={{ fill: 'green', width: '40px', height: '40px' }} />,
        startDate: dayjs('2020-06-01'),
        experience: 'Intermediate'
    },
    {
        name: 'Figma',
        icon: <img src={figmaIcon} alt="Figma Icon" style={{ fill: 'green', width: '40px', height: '40px' }} />,
        startDate: dayjs('2021-01-01'),
        experience: 'Beginner'
    },
    {
        name: 'Postman',
        icon: <img src={postmanIcon} alt="Postman Icon" style={{ fill: 'green', width: '40px', height: '40px' }} />,
        startDate: dayjs('2020-06-01'),
        experience: 'Intermediate'
    },
    {
        name: 'Word',
        icon: <img src={wordIcon} alt="Word Icon" style={{ fill: 'green', width: '40px', height: '40px' }} />,
        startDate: dayjs('2019-01-01'),
        experience: 'Advanced'
    },
    {
        name: 'Excel',
        icon: <img src={excellIcon} alt="Excel Icon" style={{ fill: 'green', width: '40px', height: '40px' }} />,
        startDate: dayjs('2019-01-01'),
        experience: 'Intermediate'
    },
    {
        name: 'PowerPoint',
        icon: <img src={powerPointIcon} alt="PowerPoint Icon" style={{ fill: 'green', width: '40px', height: '40px' }} />,
        startDate: dayjs('2019-01-01'),
        experience: 'Intermediate'
    },
];

export { coreTechs, beAndDatabases, tools }

