//
//  LPDataManager.m
//  Lunch Poll
//
//  Created by Johnny on 5/20/14.
//  Copyright (c) 2014 Apple, Inc. All rights reserved.
//

#import "LPDataManager.h"

static LPDataManager * sharedManager = nil;

@implementation LPDataManager

#pragma mark - Singleton Shared Manager
+ (id)sharedManager {
    @synchronized(self) {
        if (sharedManager == nil) {
            sharedManager = [[self alloc] init];
        }
    }
    return sharedManager;
}

@end
