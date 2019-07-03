/**
 * @Authored_By Shivang Sehgal
 */
import {Observable} from 'tns-core-modules/data/observable';
import * as app from 'tns-core-modules/application';
import * as dialogs from 'tns-core-modules/ui/dialogs';

export interface JailBreakDetectorAPI {
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

export class Common extends Observable {

  constructor() {
    super();
  }
}

export class Utils {
  public static SUCCESS_MSG(): string {
    let msg = `Your plugin is working on ${app.android ? 'Android' : 'iOS'}.`;

    setTimeout(() => {
      dialogs.alert(`${msg} For real. It's really working :)`).then(() => console.log(`Dialog closed.`));
    }, 2000);

    return msg;
  }
}
