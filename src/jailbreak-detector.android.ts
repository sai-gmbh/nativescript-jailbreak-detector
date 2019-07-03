/**
 * @Authored_By Shivang Sehgal
 */
import {Common, JailBreakDetectorAPI} from './jailbreak-detector.common';
import * as Utils from 'tns-core-modules/utils/utils';

declare const com: any;

export class JailbreakDetector extends Common implements JailBreakDetectorAPI {
  private rootBeer: any;

  constructor() {
    super();
    this.rootBeer = new com.scottyab.rootbeer.RootBeer(Utils.ad.getApplicationContext());
  }

  isRootedOrBusyboxInstalled(): boolean {
    return this.rootBeer.isRooted();
  }

  isRooted(): boolean {
    return this.isRootedWithoutBusyBoxCheck();
  }

  isRootedWithoutBusyBoxCheck(): boolean {
    return this.rootBeer.isRootedWithoutBusyBoxCheck();
  }

  detectRootManagementApps(): boolean {
    return this.rootBeer.detectRootManagementApps();
  }

  detectPotentiallyDangerousApps(): boolean {
    return this.rootBeer.detectPotentiallyDangerousApps();
  }

  detectTestKeys(): boolean {
    return this.rootBeer.detectTestKeys();
  }

  checkForBusyBoxBinary(): boolean {
    return this.rootBeer.checkForBusyBoxBinary();
  }

  checkForSuBinary(): boolean {
    return this.rootBeer.checkForSuBinary();
  }

  checkSuExists(): boolean {
    return this.rootBeer.checkSuExists();
  }

  checkForRWPaths(): boolean {
    return this.rootBeer.checkForRWPaths();
  }

  checkForDangerousProps(): boolean {
    return this.rootBeer.checkForDangerousProps();
  }

  checkForRootNative(): boolean {
    return this.rootBeer.checkForRootNative();
  }

  detectRootCloakingApps(): boolean {
    return this.rootBeer.detectRootCloakingApps();
  }

  isSelinuxFlagInEnabled(): boolean {
    return com.scottyab.rootbeer.util.Utils.isSelinuxFlagInEnabled();
  }

  checkForMagiskBinary(): boolean {
    return this.rootBeer.checkForMagiskBinary();
  }

  isJailBroken(): boolean {
    return false;
  }
}
