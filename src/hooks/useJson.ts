"use client";
import { formatJson } from "@utils/formatJson";
import { parseJsonFile } from "@utils/parseJsonFile";
import { ChangeEvent, useEffect, useRef, useState } from "react";

export function useJson() {
  const [completeJson, setCompleteJson] = useState<Array<unknown>>([]);
  const [jsonView, setJsonView] = useState<Object>({});
  const [jsonIsError, setJsonIsError] = useState(false);
  const jsonName = useRef<HTMLInputElement>({ value: "" } as HTMLInputElement);

  const [page, setPage] = useState(1);
  const pageLength = 5;

  function handleNextPage() {
    setPage((prevState) => prevState + 1);
  }

  function handlePrevPage() {
    if (page > 1) {
      setPage((prevState) => prevState - 1);
    }
  }

  async function onChangeInputJsonFile(e: ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return;

    try {
      const jsonBrute = await parseJsonFile(e.target.files[0]);
      const json = formatJson(jsonBrute);

      setCompleteJson(json);

      jsonName.current.value = `${e.target.files[0].name} - ${e.target.files[0].size}`;
    } catch {
      setJsonIsError(true);
    }
  }

  useEffect(() => {
    (() => {
      if (completeJson.length > 0) {
        setJsonView(
          completeJson.slice(page * pageLength - pageLength, page * pageLength),
        );

        window.scroll({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });

        return;
      }

      setJsonView(completeJson);
    })();
  }, [page, completeJson]);

  return {
    jsonView,
    jsonIsError,
    page,
    handleNextPage,
    handlePrevPage,
    onChangeInputJsonFile,
    jsonName,
    completeJson,
  };
}
