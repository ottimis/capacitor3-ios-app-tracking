
  Pod::Spec.new do |s|
    s.name = 'CapacitorIosAppTracking'
    s.version = '3.0.0'
    s.summary = 'App AD Tracking for iOS 14.'
    s.license = 'MIT'
    s.homepage = 'https://github.com/ottimis/capacitor3-ios-app-tracking.git'
    s.author = 'Ottimis Group'
    s.source = { :git => 'https://github.com/ottimis/capacitor3-ios-app-tracking.git', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '12.0'
    s.dependency 'Capacitor'
  end