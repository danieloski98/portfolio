'use client';
function ErrorComponent({
    error,
}: { error: any }) {
    return (
        <div className="w-full h-72 flex justify-center items-center">
            <p>An Error occured here! {JSON.stringify(error)}</p>
        </div>
    )
}

export default ErrorComponent
