const yaml = ProxyUtils.yaml;

// 读取 YAML
let yamlStr = $content ?? $files[0];

// 全局替换 Unicode -> emoji
yamlStr = yamlStr.replace(/\\U([0-9A-Fa-f]{8})/g, (_, code) =>
  String.fromCodePoint(parseInt(code, 16))
);

// 输出 YAML
// 这里不再用 safeDump/ dump，直接输出字符串，Sub-Store 会识别
$content = yamlStr;
