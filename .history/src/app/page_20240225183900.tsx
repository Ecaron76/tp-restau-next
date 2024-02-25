import Image from "next/image";

import Header from "@/components/Header/Header";
import PageContainer from "@/components/PageContainer/PageContainer";
import SliderResto from "@/components/SliderResto/SliderResto";

export default function Home() {
  return (
    <main >
      <Header />
      <PageContainer>
        <SliderResto />
      </PageContainer>
    </main>
  );
}
