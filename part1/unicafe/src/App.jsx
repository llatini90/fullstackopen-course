import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [tot, setTot] = useState(0)
  const [avg, setAvg] = useState(0)

  const setValue = (val) => {
    let tmpGood = good
    let tmpNeutral = neutral
    let tmpBad = bad
    if (val === 'good') {
      tmpGood += 1
      setGood(tmpGood)
    } else if (val === 'neutral') {
      tmpNeutral += 1
      setNeutral(tmpNeutral)
    } else if (val === 'bad') {
      tmpBad += 1
      setBad(tmpBad)
    }
    setTot(tmpGood + tmpNeutral + tmpBad)
    setAvg((tmpGood - tmpBad) / (tmpGood + tmpNeutral + tmpBad))
  }

  const btns = [ {
    text: 'good',
    handleClick: () => setValue('good')
  },
  {
    text: 'neutral',
    handleClick: () => setValue('neutral')
  },
  {
    text: 'bad',
    handleClick: () => setValue('bad')
  }];

  const data = [
    {text: 'good', value: good},
    {text: 'neutral', value: neutral},
    {text: 'bad', value: bad},
    {text: 'all', value: tot},
    {text: 'average', value: avg+'%'}
  ]
  return (
    <div>
      <Feedback btns={btns} />
      <Statistics data={data}  />
    </div>
  )
}

export default App

const Feedback = ( {btns} ) => {
  return (
    <div>
      <Head text="give feedback"/>
      {btns.map((item, index) => <Button key={index} onClick={item.handleClick} text={item.text} /> )}
    </div>
  )}

const Button = ( {onClick, text} ) => <button onClick={onClick}>{text}</button>;

const Head = ( {text} ) => <h1>{text}</h1>;

const Statistics = ( {data} ) => {
  return (
    <div>
      <Head text="statistics"/>
      <table>
        <tbody> 
          {data.map((item, index) => <StatisticLine key={index} text={item.text} val={item.value} /> )}
        </tbody>
      </table>
    </div>
  )

}

const StatisticLine = ( {text, val} ) => <tr><td>{text}</td><td>{val}</td></tr>
