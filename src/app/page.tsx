"use client";
import { ReactJson } from "@components/ReactJson";
import { Pagination } from "@components/Pagination";
import { InputJson } from "@components/InputJson";
import { useJson } from "@hooks/useJson";

export default function Home() {
  const {
    page,
    handleNextPage,
    handlePrevPage,
    jsonIsError,
    jsonView,
    onChangeInputJsonFile,
    jsonName,
    completeJson,
  } = useJson();

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 py-14">
      <section className="flex w-[65rem] flex-col items-center space-y-6 px-8">
        {Object.values(jsonView).length === 0 ? (
          <>
            <h1 className="text-5xl font-bold text-black">JSON Tree Viewer</h1>

            <p className="text-2xl font-normal">
              Simple JSON Viewer that runs completely on-client. No data
              exchange{" "}
            </p>

            <InputJson onChange={onChangeInputJsonFile} />

            {jsonIsError && (
              <p className="text-xl font-normal text-red-600">
                Invalid file. Please load a valid JSON file.
              </p>
            )}
          </>
        ) : (
          <div className="flex w-full flex-col items-center justify-center space-y-8">
            <span className="self-start text-3xl font-bold text-black">
              {jsonName.current.value}
            </span>

            <ReactJson data={jsonView} />

            {completeJson.length > 0 && (
              <Pagination
                handlePrevPage={handlePrevPage}
                handleNextPage={handleNextPage}
                page={page}
              />
            )}
          </div>
        )}
      </section>
    </main>
  );
}
