# QuizSprint

QuizSprint is a Kotlin + Jetpack Compose Android quiz app for students preparing for entrance exams, interviews, and recruitment tests.

This workspace now also includes a standalone quiz webpage you can open directly in a browser.

## Included features

- Subject-based quizzes for Java, C, C++, HTML, CSS, JavaScript, and Aptitude
- A mixed challenge mode that pulls questions across all subjects
- Multiple-choice gameplay with instant answer feedback
- One-time actions per quiz: `Explanation`, `Skip`, `Pause`, `Score`, and `Previous`
- Progress tracking during the quiz
- Final results with accuracy, attempt count, skipped count, and subject-wise performance

## Project structure

- `app/src/main/java/com/example/quizsprint/ui` contains the Compose screens and quiz state logic
- `app/src/main/java/com/example/quizsprint/data/QuestionRepository.kt` contains the bundled question bank
- `app/src/main/java/com/example/quizsprint/model/QuizModels.kt` contains the core quiz models

## Open locally

1. Open the project root in Android Studio.
2. Let Android Studio sync the Gradle files.
3. Run the `app` configuration on an emulator or Android device.

## Open the webpage

1. Open `index.html` in a browser.
2. Pick a subject and start the quiz.

## Notes

- The workspace did not include an existing Android project, so this app was scaffolded from scratch.
- A Gradle wrapper was not generated here because `gradle` is not installed in this environment.
