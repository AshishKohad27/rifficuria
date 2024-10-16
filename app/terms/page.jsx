import Newsletter from "@/components/site/newsletter";
import TermsData from "@/json/terms.json";
import Header from "@/components/site/site-header";

export default function Terms() {
    return (
        <>
            <Header />
            <main className="mb-[136px] mt-20 md:mt-22">
                <div className="site-container">
                    <article className="flex flex-col gap-4">
                        <p className="text-textColor text-base font-normal">
                            {TermsData && TermsData['content']['title']}
                        </p>
                        <p className="text-textColor text-base font-normal">
                            {TermsData && TermsData['content']['paragraphs']['text']}
                        </p>
                        <ul>
                            {
                                TermsData && TermsData['content']['listItems'].map(({ text }, index) => (
                                    <li key={index} className="text-textColor text-base font-normal">
                                        {index + 1}. {text}
                                    </li>
                                ))
                            }
                        </ul>
                        {
                            TermsData && TermsData['content']['finalParagraphs'].map(({ text }, index) => (
                                <p key={index} className="text-textColor text-base font-normal">
                                    {text}
                                </p>
                            ))
                        }
                        <p><span className="font-bold">Last updated:</span> October 16, 2024</p>
                    </article>
                </div>
            </main>
            <Newsletter />
        </>
    )
}