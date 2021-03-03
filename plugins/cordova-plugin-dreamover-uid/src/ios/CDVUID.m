//
// CDVUID.m
// CordovaLib
//
// Created by ivan.dwijaya on 22/02/2016.
//
//

#import <Foundation/Foundation.h>
#import <Cordova/CDV.h>
#import "CDVUID.h"
#include "OpenUDID.h"

@implementation CDVUID

-(void)getUID:(CDVInvokedUrlCommand *)command {
 CTTelephonyNetworkInfo* telInfo = [[CTTelephonyNetworkInfo alloc] init];
 CTCarrier* carrier = [telInfo subscriberCellularProvider];

 NSString* carrierName = [carrier carrierName];
 NSString* countryCode = [carrier mobileCountryCode];
 NSString* networkCode = [carrier mobileNetworkCode];

 NSString* openUDID = [OpenUDID value];

 if (!carrierName) {
 carrierName = @"";
 }

 if (!countryCode) {
 countryCode = @"";
 }

 if (!networkCode) {
 networkCode = @"";
 }

 NSString* result = [[carrierName stringByAppendingString:countryCode] stringByAppendingString:networkCode];

 NSDictionary *simData = [NSDictionary dictionaryWithObjectsAndKeys: openUDID, @"udid", nil];

 CDVPluginResult *pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsDictionary:simData];

 [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

@end
