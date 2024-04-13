export function SyllabusV0() {
  return (
    <div className="w-full max-w-3xl mx-auto px-4">
      <header className="text-center pb-12">
        <h1 className="text-3xl font-bold tracking-tight">Introduction to Computer Science</h1>
        <p className="text-sm text-gray-500">CSCI 101</p>
      </header>
      <div className="grid gap-6">
        <div className="grid gap-1">
          <h2 className="text-lg font-bold">Week 1: Introduction</h2>
          <p className="text-sm leading-none">
            An overview of the course, introduction to computer science, and the history of computing.
          </p>
        </div>
        <div className="grid gap-1">
          <h2 className="text-lg font-bold">Week 2: Algorithms</h2>
          <p className="text-sm leading-none">
            Understanding algorithms, problem-solving strategies, and computational thinking.
          </p>
        </div>
        <div className="grid gap-1">
          <h2 className="text-lg font-bold">Week 3: Programming</h2>
          <p className="text-sm leading-none">
            Introduction to programming languages, basics of coding, and hands-on exercises.
          </p>
        </div>
        <div className="grid gap-1">
          <h2 className="text-lg font-bold">Week 4: Data Structures</h2>
          <p className="text-sm leading-none">Exploring data structures, arrays, linked lists, stacks, and queues.</p>
        </div>
        <div className="grid gap-1">
          <h2 className="text-lg font-bold">Week 5: Final Project</h2>
          <p className="text-sm leading-none">Overview of the final project, team formation, and project proposal.</p>
        </div>
      </div>
    </div>
  )
}
