
var AccountServiceMock = {

};

var CompanyFactoryMock = {
    get: jasmine.createSpy().and.returnValue({ model: "company"})
};


var ContentFactoryMock = {
    team: { noah: "noah"}
};


var DataModelFactoryMock = {
    get: jasmine.createSpy()
};


var DateHelperMock = {
    initDate: jasmine.createSpy(),
    initTime: jasmine.createSpy()
};


var DataServiceMock = {
    Company: function(){
        return {
            push: function(){
                return { key: 'somekey'};
            }
        }
    },
    User: function(){},
    UserCompaniesMap: function(){}
};


var DataServiceHelperMock = {
    saveEntity : jasmine.createSpy().and.returnValue({
        then: function(){}
    })
};


var DropdownContentMock = {
    businessCategory : jasmine.createSpy()
};


var ENVMock = {
    //emit: jasmine.createSpy()
};


var ErrorServiceMock = {
    emit: jasmine.createSpy()
};


var EventBusMock = {
    emit: jasmine.createSpy()
};


var EventServiceMock = {
    getTypes: jasmine.createSpy()
};


var firebaseMock = {
    auth: function(){}
};

var OnBoardingServiceMock = {
    createAuthAccount : function(){},
    setCompanyAccountOwner : function(){},
    saveCompanyInformation : function(){},
    setUserCompaniesMap : function(){},
    setUidByEmail : function(){},
    assignUserToCompanyAsAdmin : function(){}
};

var SessionMock = {
    setCreatedBy: jasmine.createSpy()
};


var SubscriptionServiceMock = {
    set30DayTrial: function(){}
};


var StartupMock = {
    init: function(){}
};


var StatsMock = {
    //init: function(){}
};


var SubscriptionInformationMock = {
    getPlanCodes: jasmine.createSpy(),
    getPlans: jasmine.createSpy(),
    getProductFeatures: jasmine.createSpy(),
    getFeatureDescriptions: jasmine.createSpy(),
    getFeaturesByPlans: jasmine.createSpy()
};


var UserFactoryMock = {
    get: jasmine.createSpy().and.returnValue({ model: "user"})
};


var UserServiceMock = {
    setUidByEmail: function(){}
};

