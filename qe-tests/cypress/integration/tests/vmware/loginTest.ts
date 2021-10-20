import { login } from '../../../utils/utils';
import { testData } from './config_separate_mapping';

describe('Logging to the ui',()=>{
    it('Logging to the page',()=>{
        login(testData.loginData)
    });
});
    
