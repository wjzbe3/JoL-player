import { useEffect } from 'react';
import { videoAttributes, videoCallback } from '@/interface';
import { VideoStateType } from './context';

const useVideoCallback = (
  videoPr: videoAttributes,
  videoFlow: VideoStateType,
  handle: Partial<videoCallback>,
) => {
  const { isPlay, currentTime, isEndEd, error, volume } = videoPr;
  const { progressSliderChangeVal, progressMouseUpChangeVal } = videoFlow;
  const {
    onProgressMouseDown,
    onPlay,
    onPause,
    onTimeChange,
    onEndEd,
    onProgressMouseUp,
    onError,
    onvolumechange,
  } = handle;

  useEffect(() => {
    if (videoFlow.progressSliderChangeVal) {
      onProgressMouseDown && onProgressMouseDown(videoPr);
    }
  }, [progressSliderChangeVal]);

  useEffect(() => {
    if (videoFlow.progressMouseUpChangeVal) {
      onProgressMouseUp && onProgressMouseUp(videoPr);
    }
  }, [progressMouseUpChangeVal]);

  useEffect(() => {
    if (isPlay) {
      onPlay && onPlay(videoPr);
    } else {
      onPause && onPause(videoPr);
    }
  }, [isPlay]);

  useEffect(() => {
    if (currentTime) {
      onTimeChange && onTimeChange(videoPr);
    }
  }, [currentTime]);

  useEffect(() => {
    if (isEndEd) {
      onEndEd && onEndEd(videoPr);
    }
  }, [isEndEd]);

  useEffect(() => {
    if (error) {
      onError && onError();
    }
  }, [error]);

  useEffect(() => {
    if (volume) {
      onvolumechange && onvolumechange(videoPr);
    }
  }, [volume]);
};

export default useVideoCallback;
