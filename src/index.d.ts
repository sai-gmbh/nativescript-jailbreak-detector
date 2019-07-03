/**
 * @Authored_By Shivang Sehgal
 */
import {Common} from './jailbreak-detector.common';

export declare class JailbreakDetector extends Common {
  // define your typings manually
  // or..
  // take the ios or android .d.ts files and copy/paste them here
  isRooted(): boolean;

  isRootedWithoutBusyBoxCheck(): boolean;

  detectRootManagementApps(): boolean;

  detectPotentiallyDangerousApps(): boolean;

  detectTestKeys(): boolean;

  checkForBusyBoxBinary(): boolean;

  checkForSuBinary(): boolean;

  checkSuExists(): boolean;

  checkForRWPaths(): boolean;

  checkForDangerousProps(): boolean;

  checkForRootNative(): boolean;

  detectRootCloakingApps(): boolean;

  isSelinuxFlagInEnabled(): boolean;

  checkForMagiskBinary(): boolean;

  isJailBroken(): boolean;

  isRootedOrBusyboxInstalled(): boolean;
}
