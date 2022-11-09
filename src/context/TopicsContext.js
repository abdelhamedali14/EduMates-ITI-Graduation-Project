import { createContext } from "react";

import img1 from "../pages/courses/jonas 3.png";
import img2 from "../pages/courses/indian.png";
import img3 from "../pages/courses/nassif.png";
import img4 from "../pages/courses/jonas.png";
export const TopicsContext = createContext();

export const TopicsContextProvider = ({ children }) => {
  const topicsOptions = [
    { value: 1, label: "javascript" },
    { value: 2, label: "python" },
    { value: 3, label: "java" },
    { value: 4, label: "c#" },
    { value: 5, label: "php" },
    { value: 6, label: "android" },
    { value: 7, label: "html" },
    { value: 8, label: "jquery" },
    { value: 9, label: "c++" },
    { value: 10, label: "css" },
    { value: 11, label: "ios" },
    { value: 12, label: "mysql" },
    { value: 13, label: "sql" },
    { value: 14, label: "node.js" },
    { value: 15, label: "react.js" },
    { value: 16, label: "c" },
    { value: 17, label: "asp.net" },
    { value: 18, label: "json" },
    { value: 19, label: "django" },
    { value: 20, label: "angular" },
    { value: 21, label: "ruby" },
    { value: 22, label: "ajax" },
    { value: 23, label: "linux" },
    { value: 24, label: "xml" },
    { value: 25, label: "database" },
    { value: 26, label: "larvel" },
    { value: 27, label: "typescript" },
    { value: 28, label: "monogodb" },
    { value: 29, label: "wordpress" },
    { value: 30, label: "git" },
    { value: 31, label: "bash" },
    { value: 32, label: "orcale" },
    { value: 33, label: "flutter" },
    { value: 34, label: "aws" },
    { value: 35, label: "firebase" },
    { value: 36, label: "azure" },
    { value: 37, label: "react native" },
    { value: 38, label: "docker" },
    { value: 39, label: "datastructue" },
    { value: 40, label: "algorithm" },
    { value: 41, label: "problemsolving" },
    { value: 42, label: "powershell" },
    { value: 43, label: "vue.js" },
    { value: 44, label: "bootstrap" },
    { value: 45, label: "performance" },
    { value: 46, label: "rest" },
    { value: 47, label: "express" },
    { value: 48, label: "unit-testing" },
    { value: 49, label: "oop" },
    { value: 50, label: "validation" },
  ];
  const courses = [
    {
      courseImg: img1,
      courseTitle: "Advanced CSS and Sass: Flexbox, Grid, Animations and More",
      courseRating: 92,
      lessons: 17,
      progress: 70,
      currentLessonNum: 2,
      currentLessonName: " What is Sass ?",
    },
    {
      courseImg: img2,
      courseTitle: "Java Programming for Complete Beginners",
      courseRating: 54,
      lessons: 12,
      progress: 80,
      currentLessonNum: 24,
      currentLessonName: " Java Switch Statement",
    },
    {
      courseImg: img3,

      courseTitle: "Problem Solving with JavaScript! (LeetCode)",
      courseRating: 100,
      lessons: 5,
      progress: 25,
      currentLessonNum: 7,
      currentLessonName: "  Intersection of Two Arrays",
    },

    {
      courseImg: img4,
      courseTitle: "JavaScript - The Complete Guide 2022 (Beginner + Advanced)",
      courseRating: 84,
      lessons: 21,
      progress: 50,
      currentLessonNum: 32,
      currentLessonName: "  Module Introduction",
    },
  ];

  return (
    <TopicsContext.Provider value={{ topicsOptions, courses }}>
      {children}
    </TopicsContext.Provider>
  );
};
