import { FC } from "react";

import { DownloadLinkContainer, DownloadLinkTexts } from "./styles";
import { DownloadLinkProps } from "./types";

const DownloadLink: FC<DownloadLinkProps> = ({
  href,
  icon,
  downloadSourceText,
}) => {
  return (
    <DownloadLinkContainer href={href}>
      {icon}

      <DownloadLinkTexts>
        <span>Download via</span>
        <strong>{downloadSourceText}</strong>
      </DownloadLinkTexts>
    </DownloadLinkContainer>
  );
};

export default DownloadLink;
