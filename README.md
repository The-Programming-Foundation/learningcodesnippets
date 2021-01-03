This repository consists of all the "soon to be deprecated" code snippets for the `Learn` page of The Programming Foundation.

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

## Topics
This is material for a single topic in the lesson, such as how to list files in a directory.

Topics have to be small and should deal with only a single concept (such as how to use a new tool to achieve a certain task or how to perform a task using a tool that was introduced in one of the previous Topics and so on)

There should only be a single code snippet per topic. If a topic requires more than one code snippet to explain, consider splitting it into multiple topics

# How to contribute
This section describes how to contribute the software aspects of the learning section. If you want to contribute to our content or contribute by other means, please visit the [volunteer section](https://www.theprogrammingfoundation.org/volunteers) on our [website](https://www.theprogrammingfoundation.org).

## Code Contributions we are looking for in this repository
We are primarily looking for contributions in the form of code snippets for helping students practice what they learn from a topic/section in the [Learn Section](https://www.theprogrammingfoundation.org/learn) of the website.

We are using [JQuery Terminal](https://terminal.jcubic.pl/) for the topics in the [Unix Shell](https://www.theprogrammingfoundation.org/unix-serial/blog-post-title-three-mw484) Lesson But each Topic can use it's own tool and isn't limited to the tools we used in any other topic and as such you can use tools such as [XTerm](https://xtermjs.org/) if you are more comfortable with it or you if you have a completely differnt approach to allowing the students to practice it than in a terminal (such as in the case of binary calculations and so on).

Each Lesson has an index.html file which will have all the common libraries to be loaded for that lesson as well as provide a shared context and shared variables (such as for settings) for each topic in the lesson.

Code snippets for different topics within the same lesson can communicate with each other using the `sharedContext` object made available through `index.html` of that lesson.

Each Topic should have only one code snippet and should be present in a new file with a name representing the topic for  which the code snippet is being used.

The code snippet must allow the user to practice everything that is taught in the topic for which the code snippet is written for.

> If the snippet for a topic depends on sharedContext and expects the code snippet of the previous topic to pass values through sharedContext, ensure that there are default values set up for these if possible so that the code snippet can be ran independently if need be.

After code snippet for a topic has been added for a lesson, it must be included in the `index.html` file by using the following lines of code:
```html
  { Topic Name }
  <div data-include="{Code Snippet File Name Without Extension}"></div>
```

The `index.html` File joins together all the code snippets and sets up the settings variables and shared context required for the individual code snippets to work.

If you want to run your code snippet on the browser, all you have to do is point a static file server such as [serve](https://www.npmjs.com/package/serve) to the directory of the lesson and then load the URL on your browser to render `index.html` which will in-turn render your code snippet under the title of the Topic you wrote it for.

## Code, commit message and labeling conventions

### Commit message conventions.

We follow the conventional commits guidelines. Check [here](https://www.conventionalcommits.org/en/v1.0.0/)

## PULL Requests and Code review process

Before opening pull requests, ensure that the code snippets work and are able to meet the requirements in the content of the topic, by rendering it on your browser and interacting with it.

Opening pull requests should be done with enough information and screenshots for visual changes to facilitate the reviewers job. Its MANDATORY to add a link to the issue related.

Your contribution will have to be Approved by a member of the Organization before being merged.

> The core team looks at Pull Requests on a regular basis.
> After feedback has been given we expect responses within two weeks. After two weeks we may close the pull request if it isn't showing any activity.

## How to report a bug

> For any non security-related issues, open an issue describing the problem.

## How to suggest a feature or enhancement

> Open an issue using with the suggestion you wish to give.
