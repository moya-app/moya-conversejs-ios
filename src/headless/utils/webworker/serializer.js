class MockXMLSerializer{
    constructor(){}
    serializeToString(document){
        return document.documentElement.outerHTML;
    }

}
if(self['auto_init_mock']){
    self.XMLSerializer = MockXMLSerializer;
}

export const serializer = MockXMLSerializer;