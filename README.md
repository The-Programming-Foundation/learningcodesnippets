This repository consists of all the code snippets for the `Learn` page of The Programming Foundation.

# Structure of the repository
This repo follows a hierarchical directory structure that resembles the hierarchy present in the website's `Learn` page.

A `Domain` is the highest element of the hierarchy. Under each `Domain`, there are `Sections`, under each `Section`, there are `Lessons`, and, under each `Lesson`, there are `Topics`.

```
.
├── ...
├── Domain1             
│   ├── Section1
│   │   ├── Lesson1
│   │   │   ├── Topic1
│   │   │   ├── Topic2
│   │   │   └── ...
│   │   ├── Lesson2
│   │   └── ...
│   ├── Section2
│   │   └── ...
│   ├── Section3
│   │   └── ...
│   └── ...
├── Domain2            
│   └── ...
└── ...
```

## Domain
Domains are a means to categorize our learning page. Relevant Sections are classified together under them.
`Operating systems` are under a `Domain` as they deal with a collection of tools and instructions, whereas `Programming languages` are considered another domain as they deal with a selection of ideas and tools.

## Section
Sections are a set of Lessons that help students learn about a particular tool, concept, or procedure. Multiple lessons are inside each Section, which covers a set of related concepts.

An example of a Section under the Domain `Operating systems` is `Unix` as it is a family of operating systems.

Another example of a section under `Operating systems` is `Vim`. It is a text-editor tool that comes with major Unix or Unix-like operating systems and can be learned separately of the `Unix` section.


## Lesson
Lessons are a collection of Topics to learn together. Lessons in a section are allowed to have relationships or dependencies with other lessons in a section in sequential order.

An example of a lesson under the section `Unix` is the `Unix shell` as it is a CLI with a wide range of tools to operate a Unix operating system.

Another example of a lesson under the section `Unix` is the `Unix file structure` as it is a concept in Unix and Unix-like operating systems. The Lessons, `Unix Shell` and, `Unix file structure` can have dependency between the two as we expect students to already know the `Unix file structure` before moving to the `Unix shell` lesson.
