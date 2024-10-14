import Link from "next/link";

export default function ForgetPasswordMessage() {
    return (
        <article className="flex flex-col justify-center items-center gap-4">
            <p className="text-textColor text-sm font-normal leading-4.5 text-center">
                We&apos;ve sent a verification email to{" "}
                <span className="font-bold">user@gmail.com</span>. Please check your
                inbox and click on the verification link provided in the email. If you
                don&apos;t see the email in your inbox, please check your spam or junk
                folder.
            </p>
            <p className="text-textColor text-sm font-normal leading-4.5 flex gap-1">
                <Link href="" title="Didn&apos;t receive the email?" className="text-coral underline">
                    Didn&apos;t receive the email?
                </Link>
                <Link href="" title="Click here to resend" className="underline">
                    Click here to resend.
                </Link>
            </p>
        </article>
    );
}
