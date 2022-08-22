import './App.scss'

import { Form, Sign } from 'components'
import { useState } from 'react'
import { zodiacData } from 'ts/data'

function App() {
  const [currentSign, setCurrentSign] = useState('var(--slate-500)')

  function setSign(color: string, sound: string): void {
    new Audio(`/sounds/${sound}`).play()
    setCurrentSign(color)
  }

  return (
    <>
      <div className="app" style={{ backgroundColor: currentSign }}>
        <main>
          {zodiacData.map(({ id, color, sound }) => (
            <Sign
              color={color}
              key={`sign-button-${id}`}
              setSign={setSign}
              sound={sound}
            />
          ))}
          <div className="details">
            <h2>
              {currentSign
                .substring(currentSign.length, 6)
                .slice(0, -1)
                .toUpperCase()}
            </h2>
            <p>
              Custom description related to{' '}
              <b>{currentSign.substring(currentSign.length, 6).slice(0, -1)}</b>{' '}
              lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
              voluptas unde ex molestiae laborum sunt voluptate iusto officiis
              assumenda!
            </p>
          </div>
        </main>
        <aside>
          <Form setCurrentSign={setCurrentSign} />
        </aside>
      </div>
    </>
  )
}

export default App
