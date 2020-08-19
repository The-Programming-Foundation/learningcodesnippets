This repo consists of all the code snippets for the Learning section of the website.

# Structure of the Repo
This repo follows a hierarchical directory structure which resembles the hierarchy present in the learning section of the website.

At the top of the hierarchy, we have `Domains`. Under each `Domain`, we have `Courses`. Under each `Course`, we have `Lessons`. Under each `Lesson`, we have `Topics`.

```
.
├── ...
├── Domain1             
│   ├── Course1
│   │   ├── Lesson1
│   │   │   ├── Topic1
│   │   │   ├── Topic2
│   │   │   └── ...
│   │   ├── Lesson2
│   │   └── ...
│   ├── Course2
│   │   └── ...
│   ├── Course3
│   │   └── ...
│   └── ...
├── Domain2            
│   └── ...
└── ...
```

## Domains
Domains are a means to categorize our learning material. Similar Courses are categorized together undre one `Domain`.
Examples  of Domains are `Operating Systems` as it deals with a collection of tools and concepts. `Programming Languages` can be considered as another  domain as it deals with a collection of concepts and tools that are different from those of the `Operating Systems`

## Courses
Courses are materials that help students learn about a particular tool, concept or procedure. Each course is organized into multiple Lessons each of which covers a set of related concepts.

An Example of a course under the Domain `Operating System` is `Unix` as it is a type of Operating System.

Another example of a course in `Operating System` would be `Vim` as it is a tool which can be learnt independantly of the `Unix` Course.


## Lessons
Lessons are a collection of Topics that can be learnt together. Lessons in a course are allowed to have relationships or dependencies with other lessons in a course and can be designed in a sequential order.

An Example of a lesson under the Course `Unix` is `Unix Shell` as it is an tool offered by Unix which in turn has a lot of tools inside of it.
Another example of a lesson in the Course `Unix` is `Unix File Structure` as it is a concept in Unix. The Lessons `Unix Shell` and `Unix File Structure` can have a depenency between the two as we can expect students to already know `Unix File Structure` Before learning `Unix Shell`.

Another example of a course in `Operating System` would be `Unix File Structure` as the concepts of `Unix File Structure` can be learnt independently of the `Unix Shell`.
