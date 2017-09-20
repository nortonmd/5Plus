/**
 * Created by nortonmd on 9/20/17.
 */

public with sharing class OpenCasesController {

    @AuraEnabled
    public static List<Case> getOpenCasesDB() {
        return [
                SELECT Id, Type, Status, Reason, IsClosed, OwnerId, Origin
                FROM Case
                WHERE IsClosed = false
                AND OwnerId = :UserInfo.getUserId()
        ];
    }

}