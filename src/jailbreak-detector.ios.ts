/**
 * @Authored_By Shivang Sehgal
 */
import {Common, JailBreakDetectorAPI} from './jailbreak-detector.common';

export class JailbreakDetector extends Common implements JailBreakDetectorAPI {

  isRootedOrBusyboxInstalled(): boolean {
    return false;
  }

  isRootedWithoutBusyBoxCheck(): boolean {
    return false;
  }

  detectRootManagementApps(): boolean {
    return false;
  }

  detectPotentiallyDangerousApps(): boolean {
    return false;
  }

  detectTestKeys(): boolean {
    return false;
  }

  checkForBusyBoxBinary(): boolean {
    return false;
  }

  checkForSuBinary(): boolean {
    return false;
  }

  checkSuExists(): boolean {
    return false;
  }

  checkForRWPaths(): boolean {
    return false;
  }

  checkForDangerousProps(): boolean {
    return false;
  }

  checkForRootNative(): boolean {
    return false;
  }

  detectRootCloakingApps(): boolean {
    return false;
  }

  isSelinuxFlagInEnabled(): boolean {
    return false;
  }

  checkForMagiskBinary(): boolean {
    return false;
  }

  public isRooted(): boolean {
    return this.isJailBroken();
  }

  isJailBroken(): boolean {
    // @ts-ignore
    return DTTJailbreakDetection.isJailbroken();
  }
}
