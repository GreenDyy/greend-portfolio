// Import tất cả icons
import reactIcon from '../assets/icons/react.svg';
import csharpIcon from '../assets/icons/csharp.svg';
import javascriptIcon from '../assets/icons/javascript.svg';
import typescriptIcon from '../assets/icons/typescript.svg';
import nodejsIcon from '../assets/icons/nodejs.svg';
import aspnetIcon from '../assets/icons/aspnet.svg';
import mongodbIcon from '../assets/icons/mongodb.svg';
import sqlserverIcon from '../assets/icons/sql.svg';
import gitIcon from '../assets/icons/git.svg';
import githubIcon from '../assets/icons/github.svg';
import gitlabIcon from '../assets/icons/gitlab.svg';
import sourceTreeIcon from '../assets/icons/sourcetree.svg';
import figmaIcon from '../assets/icons/figma.svg';
import postmanIcon from '../assets/icons/postman.svg';
import excellIcon from '../assets/icons/excel.svg';
import powerPointIcon from '../assets/icons/powerpoint.svg';
import wordIcon from '../assets/icons/word.svg';
import javaIcon from '../assets/icons/java.svg';
//png
import coreIcon from '../assets/icons/core.png';
import databaseIcon from '../assets/icons/database.png';
import toolsIcon from '../assets/icons/tools.png';

// Mapping object để map tên icon -> path icon
export const iconMap: Record<string, string> = {
    react: reactIcon,
    reactNative: reactIcon,
    csharp: csharpIcon,
    javascript: javascriptIcon,
    typescript: typescriptIcon,
    nodejs: nodejsIcon,
    aspnet: aspnetIcon,
    mongodb: mongodbIcon,
    sqlserver: sqlserverIcon,
    git: gitIcon,
    github: githubIcon,
    gitlab: gitlabIcon,
    sourcetree: sourceTreeIcon,
    figma: figmaIcon,
    postman: postmanIcon,
    excel: excellIcon,
    powerpoint: powerPointIcon,
    word: wordIcon,
    java: javaIcon,
    core: coreIcon,
    database: databaseIcon,
    tools: toolsIcon,
} as const;

export const icons = {

} as const;

export type Icons = typeof icons;

