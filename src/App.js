import React from 'react'
import ThreeLayout from './components/ThreeLayout'

export default function App() {
  return (
    <div>
      <ThreeLayout
        left={<span>左侧内容区</span>}
        right={<span>右侧内容区</span>}
        gap={30}
      >
        <div>
          <h1>内容区</h1>
          <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, ipsum. Minima, similique, laudantium quia doloribus veritatis illo et quod placeat, voluptatibus natus quae commodi omnis molestias? Quae velit ratione cum.</span>
          <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, ipsum. Minima, similique, laudantium quia doloribus veritatis illo et quod placeat, voluptatibus natus quae commodi omnis molestias? Quae velit ratione cum.</span>
          <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, ipsum. Minima, similique, laudantium quia doloribus veritatis illo et quod placeat, voluptatibus natus quae commodi omnis molestias? Quae velit ratione cum.</span>
        </div>
      </ThreeLayout>
    </div>
  )
}
