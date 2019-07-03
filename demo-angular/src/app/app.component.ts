import {JailbreakDetector} from 'nativescript-jailbreak-detector';

import {Component, OnInit} from "@angular/core";
import {JailBreakDetectorAPI} from "../../../src/jailbreak-detector.common";

@Component({
    moduleId: module.id,
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent implements OnInit {
    jailbreakDetector: JailBreakDetectorAPI;

    constructor() {
        this.jailbreakDetector = new JailbreakDetector();
    }

    unlocked: boolean;

    ngOnInit(): void {
        this.unlocked = this.jailbreakDetector.isRooted();
    }

    result(check: string): boolean {
        if (typeof this.jailbreakDetector[check] === 'function') {
            return this.jailbreakDetector[check]();
        }
        return false;
    }
}
