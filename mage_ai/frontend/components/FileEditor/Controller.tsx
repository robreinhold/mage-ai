import ApiReloader from '@components/ApiReloader';
import FileEditor from '@components/FileEditor';

function Controller({
  addNewBlock,
  disableRefreshWarning,
  fetchPipeline,
  fetchVariables,
  onUpdateFileSuccess,
  openFilePaths,
  openSidekickView,
  pipeline,
  saveFile,
  selectedFilePath,
  sendTerminalMessage,
  setContentByFilePath,
  setDisableShortcuts,
  setErrors,
  setFilesTouched,
  setSelectedBlock,
}) {
  return (
    <>
      {openFilePaths?.map((filePath: string) => (
        <div
          key={filePath}
          style={{
            display: selectedFilePath === filePath
              ? null
              : 'none',
          }}
        >
          <ApiReloader uuid={`FileEditor/${decodeURIComponent(filePath)}`}>
            <FileEditor
              active={selectedFilePath === filePath}
              addNewBlock={addNewBlock}
              disableRefreshWarning={disableRefreshWarning}
              fetchPipeline={fetchPipeline}
              fetchVariables={fetchVariables}
              filePath={filePath ? encodeURIComponent(filePath) : null}
              hideHeaderButtons
              onContentChange={(content: string) => setContentByFilePath({
                [filePath]: content,
              })}
              onUpdateFileSuccess={onUpdateFileSuccess}
              openSidekickView={openSidekickView}
              pipeline={pipeline}
              sendTerminalMessage={sendTerminalMessage}
              setDisableShortcuts={setDisableShortcuts}
              setSelectedBlock={setSelectedBlock}
              saveFile={saveFile}
              selectedFilePath={selectedFilePath}
              setErrors={setErrors}
              setFilesTouched={setFilesTouched}
            />
          </ApiReloader>
        </div>
      ))}
    </>
  );
}

export default Controller;
