import Header from "../components/Header";
import Title from "../assets/img/MainTitle.svg";
import MainImg1 from "../assets/img/MainImg1.svg";
import MainImg2 from "../assets/img/MainImg2.svg";
import MainImg3 from "../assets/img/MainImg3.svg";
import LayoutButton from "../components/LayoutButton";
import Nextbutton_Left from "../assets/img/Nextbutton_Left.svg";
import Nextbutton_Right from "../assets/img/Nextbutton_Right.svg";

export default function MainPage() {
    return (
        <main className="h-screen grid grid-rows-[auto_auto_1fr] overflow-hidden">
            <Header />

            <section className="flex-none">
                <img
                    src={Title}
                    alt="Title"
                    className="w-full object-contain"
                />
            </section>

            <section className="grid grid-rows-2 min-h-0 h-full">
                <div className="grid grid-cols-3 border-t border-black">
                    <div className="col-span-2">
                        <img
                            src={MainImg1}
                            alt="main1"
                            className="w-full h-full object-cover object-left"
                        />
                    </div>

                    <LayoutButton className="col-span-1 border-l border-black p-6 flex flex-col">
                        <div className="text-black text-heading-h3 flex items-center gap-2">
                            노래 감상평 확인하기
                            <img src={MainImg3} alt="main3" className="w-8" />
                        </div>

                        <div className="flex items-center gap-5 mt-20 ml-5">
                            <img src={Nextbutton_Left} alt="left" className="w-10" />
                            <p className="text-black text-body-base">
                                내 노래에 남겨진 <br />
                                감상평을 확인해보세요!
                            </p>
                        </div>
                    </LayoutButton>
                </div>

                <div className="grid grid-cols-3 border-t border-black">
                    <div className="col-span-1 border-r border-black p-6 flex flex-col bg-primary-100">
                        <div className="text-black text-heading-h3 leading-tight">
                            도솔에 오신 걸 환영해요!
                        </div>
                        <p className="text-black text-body-base mt-20 ml-5">
                            세대별 음악 취향을 확인하고 <br />
                            서로의 음악을 공유해보세요!
                        </p>
                    </div>

                    <LayoutButton className="col-span-1 border-r border-black p-6 flex flex-col">
                        <div className="text-black text-heading-h3">
                            나는 K-POP 몇 세대 일까?
                        </div>
                        <div className="flex justify-end items-center gap-2 mt-20 mr-5">
                            <p className="text-black text-body-base">
                                지금 바로 확인하기
                            </p>
                            <img src={Nextbutton_Right} alt="right" className="w-10" />
                        </div>
                    </LayoutButton>

                    <div className="col-span-1 flex items-end">
                        <img
                            src={MainImg2}
                            alt="main2"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>
        </main>
    );
}
