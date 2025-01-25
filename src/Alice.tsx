import React from "react";

export interface AliceProps {
  modelPath?: string;
}

export const Alice: React.FC<AliceProps> = ({
  modelPath = "/path/to/default/model.glb",
}) => {
  return (
    <model-viewer id="alice" src={modelPath} camera-controls auto-rotate ar>
      {/* Progress bar and other elements */}
    </model-viewer>
  );
};

export default Alice;
