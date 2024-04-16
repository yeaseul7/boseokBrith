import Canvas from "@/components/Canvas";
import { Background, BoImage1, BoImage2,BoImage3, BoImage4, BoImage5, Main, SubMain } from "@/style/homeStyle";


export default function Home() {
  return (
    <Background>
      <BoImage1
      src="/oopsBo.jpeg"
      width={250}
      height={240}
      alt="Picture of the author"
    />
    <BoImage2
      src="/happy_bo.jpg"
      width={300}
      height={300}
      alt="Picture of the author"
    />
        <BoImage3
      src="/boseok22.JPG"
      width={150}
      height={150}
      alt="Picture of the author"
    />
        <BoImage4
      src="/what.jpeg"
      width={400}
      height={400}
      alt="Picture of the author"
    />
        <BoImage5
      src="/og.JPG"
      width={250}
      height={250}
      alt="Picture of the author"
    />

    <Main className="home">
      <SubMain><h2>쥬얼리의 33번째 생일을</h2>
      <h1>🎂 축하합니다 🎂</h1> </SubMain>
      <Canvas />
    </Main>
    </Background>
  )
}
