//
// CDVUID.h
// CordovaLib
//
// Created by ivan.dwijaya on 22/02/2016.
//
//

#import <Cordova/CDVPlugin.h>
#import <CoreTelephony/CTCarrier.h>
#import <CoreTelephony/CTTelephonyNetworkInfo.h>

@interface CDVUID : CDVPlugin
 -(void)getUID:(CDVInvokedUrlCommand*) command;
@end
