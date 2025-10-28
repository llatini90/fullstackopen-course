
const App = () => {
  const course = 'Half Stack application development'
  const parts = [{
    name: 'Fundamentals of React',
    exercises: 10
  },
  {
    name: 'Using props to pass data',
    exercises: 7
  },
  {
    name: 'State of a component',
    exercises: 14
  }
];


  return (
    <div>
      <Header course={course} />
      <Content parts={parts}/>
      <Total parts={parts}/>
    </div>
  )
}

export default App

const Header = ({course}) => <h1>{course}</h1>

const Content = (props) => <>{props.parts.map((item, index) => <p key={index}>{item.name}</p>)}</>

const Total = ( props ) => <p>Number of exercises {props.parts.reduce((a,v) =>  a = a + v.exercises , 0 )}</p>