#!/usr/bin/env node
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const API_BASE = "https://www.smsz.xyz/prod-api";
const PACKAGE_SPEC = "github:shanye1402-hash/hotbee-api-skills#v1.0.0";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const skillsDir = path.join(rootDir, "skills");
const args = process.argv.slice(2);
const command = args[0] || "help";

const FEATURES = {
  image2: {
    skill: "hotbee-image2",
    title: "Image2",
    keyEnv: ["HOTBEE_API_KEY", "HOTBEE_IMAGE2_KEY", "SMSZ_IMAGE2_KEY", "IMAGE2_KEY"],
    summary: "GPT Image 2 image generation and task query.",
  },
  banana: {
    skill: "hotbee-banana",
    title: "Banana2 / Banana Pro",
    keyEnv: ["HOTBEE_API_KEY", "HOTBEE_IMAGE2_KEY", "SMSZ_IMAGE2_KEY", "IMAGE2_KEY"],
    summary: "Nano Banana 2 / Pro image generation using the shared Image2 query flow.",
  },
  seedance: {
    skill: "hotbee-seedance",
    title: "Seedance 2.0",
    keyEnv: ["HOTBEE_API_KEY", "HOTBEE_SEEDANCE_KEY", "SEEDANCE_API_KEY"],
    summary: "Seedance 2.0 video generation and task query.",
  },
  happyhorse: {
    skill: "hotbee-happyhorse",
    title: "HappyHorse 1.0",
    keyEnv: ["MUAPI_API_KEY", "HAPPYHORSE_API_KEY"],
    summary: "HappyHorse 1.0 video generation. HotBee endpoint is not publicly verified in the current catalog.",
  },
  douyin: {
    skill: "hotbee-douyin-collect",
    title: "Douyin Collect",
    keyEnv: ["HOTBEE_API_KEY", "HOTBEE_DOUYIN_KEY"],
    summary: "Douyin video, comments, creator, hashtag data.",
  },
  rednote: {
    skill: "hotbee-rednote-collect",
    title: "Rednote Collect",
    keyEnv: ["HOTBEE_API_KEY", "HOTBEE_REDNOTE_KEY", "REDNOTE_KEY"],
    summary: "Xiaohongshu/Rednote note content collection.",
  },
  bilibili: {
    skill: "hotbee-bilibili-collect",
    title: "Bilibili Collect",
    keyEnv: ["HOTBEE_API_KEY", "HOTBEE_BILIBILI_KEY"],
    summary: "Bilibili video data collection.",
  },
  transcript: {
    skill: "hotbee-transcript",
    title: "Audio/Video Transcript",
    keyEnv: ["HOTBEE_API_KEY", "HOTBEE_TRANSCRIPT_KEY"],
    summary: "Audio/video to text through HotBee speechToText.",
  },
  "hot-rankings": {
    skill: "hotbee-hot-rankings",
    title: "All-Web Hot Rankings",
    keyEnv: ["HOTBEE_API_KEY"],
    summary: "Hot ranking workflow. No verified HotBee endpoint was found in the public bundle.",
  },
  "rednote-seed-code": {
    skill: "hotbee-rednote-seed-code",
    title: "Rednote Seed Code",
    keyEnv: ["HOTBEE_API_KEY", "HOTBEE_REDNOTE_KEY", "REDNOTE_KEY", "SMSZ_REDNOTE_KEY"],
    summary: "Create Rednote seed-code publish pages and QR codes.",
  },
};

const ALIASES = {
  all: "all",
  image: "image2",
  gptimage2: "image2",
  "banana2": "banana",
  "banana-pro": "banana",
  "nano-banana": "banana",
  video: "seedance",
  dy: "douyin",
  xhs: "rednote",
  xiaohongshu: "rednote",
  rednote_collect: "rednote",
  b: "bilibili",
  bili: "bilibili",
  speech: "transcript",
  asr: "transcript",
  hot: "hot-rankings",
  rank: "hot-rankings",
  seedcode: "rednote-seed-code",
  "seed-code": "rednote-seed-code",
  zhongcao: "rednote-seed-code",
};

function configureWindowsUtf8Console() {
  if (process.platform !== "win32" || process.env.HOTBEE_SKIP_UTF8_CONSOLE === "1") return;
  spawnSync("cmd.exe", ["/d", "/s", "/c", "chcp 65001 > nul"], { stdio: "ignore", windowsHide: true });
}

configureWindowsUtf8Console();

function normalizeFeature(name) {
  const raw = String(name || "").trim();
  return ALIASES[raw] || raw;
}

function allFeatureNames() {
  return Object.keys(FEATURES);
}

function hasFlag(argv, flag) {
  return argv.includes(flag);
}

function optionValue(argv, name, fallback = "") {
  const index = argv.indexOf(name);
  return index === -1 ? fallback : argv[index + 1] || fallback;
}

function optionValues(argv, name) {
  const values = [];
  for (let i = 0; i < argv.length; i += 1) {
    if (argv[i] === name && argv[i + 1]) values.push(argv[i + 1]);
  }
  return values;
}

function parseOptions(argv) {
  return {
    dryRun: hasFlag(argv, "--dry-run"),
    raw: hasFlag(argv, "--raw"),
    format: optionValue(argv, "--format", "markdown"),
    key: optionValue(argv, "--key", ""),
    text: optionValue(argv, "--text", ""),
    prompt: optionValue(argv, "--prompt", optionValue(argv, "--text", "")),
    url: optionValue(argv, "--url", ""),
    urls: optionValues(argv, "--url"),
    imageUrls: optionValues(argv, "--image-url").concat(optionValues(argv, "--image")),
    videoUrls: optionValues(argv, "--video-url"),
    audioUrls: optionValues(argv, "--audio-url"),
    fileUrl: optionValue(argv, "--file-url", ""),
    videoUrl: optionValue(argv, "--video-url", ""),
    taskId: optionValue(argv, "--task-id", optionValue(argv, "--id", "")),
    out: optionValue(argv, "--out", ""),
    limit: Number(optionValue(argv, "--limit", "20")) || 20,
    model: optionValue(argv, "--model", ""),
    mode: optionValue(argv, "--mode", ""),
    aspectRatio: optionValue(argv, "--aspect-ratio", optionValue(argv, "--ratio", "auto")),
    resolution: optionValue(argv, "--resolution", "720p"),
    quality: optionValue(argv, "--quality", "auto"),
    duration: optionValue(argv, "--duration", ""),
    title: optionValue(argv, "--title", ""),
    content: optionValue(argv, "--content", ""),
    chId: optionValue(argv, "--ch-id", optionValue(argv, "--ch_id", "")),
    keyword: optionValue(argv, "--keyword", ""),
    cursor: optionValue(argv, "--cursor", "0"),
    maxCursor: optionValue(argv, "--max-cursor", optionValue(argv, "--maxCursor", "0")),
    sortType: optionValue(argv, "--sort-type", optionValue(argv, "--sortType", "0")),
    baseUrl: optionValue(argv, "--base-url", ""),
  };
}

function keyFor(feature, opts) {
  if (opts.key) return opts.key;
  for (const envName of FEATURES[feature].keyEnv) {
    if (process.env[envName]) return process.env[envName];
  }
  return "";
}

function redact(value) {
  if (!value || typeof value !== "object") return value;
  if (Array.isArray(value)) return value.map(redact);
  return Object.fromEntries(Object.entries(value).map(([k, v]) => {
    const lower = k.toLowerCase();
    return [k, lower === "key" || lower.includes("authorization") || lower.includes("api-key") ? "****" : redact(v)];
  }));
}

function usage() {
  console.log(`HotBee API Skills

Install all skills:
  npx -y ${PACKAGE_SPEC} install

Install one skill:
  npx -y ${PACKAGE_SPEC} install image2
  npx -y ${PACKAGE_SPEC} install douyin

Call one feature:
  npx -y ${PACKAGE_SPEC} call image2 --prompt "生成一张小红书封面" --dry-run
  npx -y ${PACKAGE_SPEC} call douyin --text "解析这个视频的播放量 https://v.douyin.com/xxxx/" --dry-run

Commands:
  list
  install [all|${allFeatureNames().join("|")}]
  call <feature> [--dry-run] [--format markdown|json]
`);
}

function commandExists(name) {
  const probe = process.platform === "win32" ? "where" : "command";
  const probeArgs = process.platform === "win32" ? [name] : ["-v", name];
  return spawnSync(probe, probeArgs, { stdio: "ignore", shell: process.platform !== "win32" }).status === 0;
}

function targetRoots() {
  const home = os.homedir();
  const roots = [path.join(home, ".agents", "skills")];
  if (fs.existsSync(path.join(home, ".claude")) || commandExists("claude") || hasFlag(args, "--claude")) {
    roots.push(path.join(home, ".claude", "skills"));
  }
  return roots;
}

function copySkill(skillName, root, opts) {
  const source = path.join(skillsDir, skillName);
  const target = path.join(root, skillName);
  if (opts.dryRun) {
    console.log(`[dry-run] Would install ${skillName} -> ${target}`);
    return;
  }
  if (!fs.existsSync(source)) throw new Error(`Missing skill directory: ${source}`);
  if (fs.existsSync(target)) {
    if (!opts.force) {
      console.log(`[skip] ${target} already exists. Use --force to replace.`);
      return;
    }
    fs.rmSync(target, { recursive: true, force: true });
  }
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.cpSync(source, target, { recursive: true });
  console.log(`[ok] Installed ${skillName} -> ${target}`);
}

function installCommand() {
  const targetArg = args.slice(1).find((arg) => !arg.startsWith("--")) || "all";
  const target = normalizeFeature(targetArg);
  const opts = { dryRun: hasFlag(args, "--dry-run"), force: hasFlag(args, "--force") };
  const features = target === "all" ? allFeatureNames() : [target];
  for (const feature of features) {
    if (!FEATURES[feature]) throw new Error(`Unknown feature: ${feature}`);
    for (const root of targetRoots()) copySkill(FEATURES[feature].skill, root, opts);
  }
  console.log(`
HotBee API skills are ready.

Set a shared HotBee key when needed:
  PowerShell: [Environment]::SetEnvironmentVariable("HOTBEE_API_KEY", "YOUR_KEY", "User")
  macOS/Linux: export HOTBEE_API_KEY="YOUR_KEY"

List commands:
  npx -y ${PACKAGE_SPEC} list
`);
}

function listCommand() {
  for (const [id, meta] of Object.entries(FEATURES)) {
    console.log(`${id.padEnd(18)} ${meta.skill.padEnd(28)} ${meta.summary}`);
  }
}

function urlWithParams(endpoint, params) {
  const url = new URL(`${API_BASE}${endpoint}`);
  for (const [key, value] of Object.entries(params)) {
    if (value == null || value === "") continue;
    if (Array.isArray(value)) value.forEach((item) => url.searchParams.append(key, item));
    else url.searchParams.set(key, String(value));
  }
  return url.toString();
}

async function postJson(endpoint, body) {
  const response = await fetch(`${API_BASE}${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  return parseResponse(response);
}

async function postQuery(endpoint, params) {
  const response = await fetch(urlWithParams(endpoint, params), { method: "POST" });
  return parseResponse(response);
}

async function postForm(endpoint, fields, query = {}) {
  const form = new FormData();
  for (const [key, value] of Object.entries(fields)) {
    if (value == null || value === "") continue;
    if (Array.isArray(value)) value.forEach((item) => form.append(key, item));
    else form.append(key, String(value));
  }
  const response = await fetch(urlWithParams(endpoint, query), { method: "POST", body: form });
  return parseResponse(response);
}

async function parseResponse(response) {
  const text = await response.text();
  let data;
  try { data = JSON.parse(text); } catch { data = { raw: text }; }
  return { httpStatus: response.status, ok: response.ok, data };
}

function extractFirstUrl(text) {
  return (String(text || "").match(/https?:\/\/[^\s"'<>，。；、）)]+/i)?.[0] || "").replace(/[.,，。；;!?！？]+$/g, "");
}

function douyinPlan(opts, key) {
  const text = opts.text || opts.prompt;
  const url = opts.url || extractFirstUrl(text);
  const body = {};
  if (url) body.url = url;
  const endpoints = [];
  const isUser = /douyin\.com\/user\//i.test(url);
  if (opts.chId || /话题视频|话题列表/.test(text)) {
    endpoints.push({ title: "抖音话题视频列表", endpoint: "/tool/douyin/Dy_hashtag_video_list_VIP", body: { ch_id: opts.chId, maxCursor: opts.maxCursor, sortType: opts.sortType, key } });
  } else if (/话题/.test(text)) {
    endpoints.push({ title: "抖音话题详情", endpoint: "/tool/douyin/Dy_hashtag_detail_VIP", body: { ch_id: opts.chId, key } });
  } else if (/关键词|搜索/.test(text) && !url) {
    endpoints.push({ title: "抖音关键词搜索", endpoint: "/tool/douyin/Dy_search_video_VIP", body: { keyword: opts.keyword || text.replace(/关键词|搜索|视频/g, "").trim(), offset: 0, key } });
  } else if (isUser) {
    if (/粉丝画像|年龄|地域|性别|兴趣/.test(text)) endpoints.push({ title: "抖音粉丝画像", endpoint: "/tool/douyin/Dy_fans_portrai_VIP", body: { ...body, key } });
    if (/前20|小程序|免卡密/.test(text)) endpoints.push({ title: "抖音主页前20条视频及小程序", endpoint: "/tool/douyin/Dy_user_video_and_app", body });
    if (/作品|视频/.test(text)) endpoints.push({ title: "抖音达人主页全量作品", endpoint: "/tool/douyin/Dy_user_video_all_VIP", body: { ...body, key } });
    if (!endpoints.length) endpoints.push({ title: "抖音达人综合数据免卡密", endpoint: "/tool/douyin/Dy_user_videos_info", body });
  } else {
    if (/评论/.test(text)) endpoints.push({ title: "抖音评论采集", endpoint: "/tool/douyin/Dy_video_comments_VIP", body: { ...body, key } });
    if (/播放量|点赞|评论数|核心数据/.test(text)) endpoints.push({ title: "抖音播放量", endpoint: "/tool/douyin/Dy_video_info_VIP", body: { ...body, key } });
    if (/基础信息|标题|作者|封面|详情/.test(text) || !endpoints.length) endpoints.push({ title: "抖音视频基础信息", endpoint: "/tool/douyin/Dy_video_info", body });
  }
  return endpoints;
}

function buildRequests(feature, opts, key) {
  if (feature === "image2") {
    if (opts.taskId) return [{ title: "Image2 query", transport: "query", endpoint: "/tool/gptimage2/query", params: { key, id: opts.taskId } }];
    const imageResolution = opts.resolution === "720p" ? "1K" : opts.resolution.toUpperCase();
    return [{ title: "Image2 generate", transport: "form", endpoint: "/tool/gptimage2/generate", fields: {}, params: {
      key, prompt: opts.prompt, model: opts.model || "gpt-image-2", aspectRatio: opts.aspectRatio, resolution: imageResolution, quality: opts.quality, urls: opts.urls, webHook: "-1", shutProgress: false,
    } }];
  }
  if (feature === "banana") {
    const model = /pro/i.test(opts.model) ? "nano-banana-pro" : (opts.model || "nano-banana");
    if (opts.taskId) return [{ title: "Banana query", transport: "query", endpoint: "/tool/gptimage2/query", params: { key, id: opts.taskId } }];
    return [{ title: "Banana generate", transport: "query", endpoint: "/tool/nanobanana/draw/generate", params: { key, prompt: opts.prompt, model, aspectRatio: opts.aspectRatio, imageSize: optionValue(args, "--image-size", ""), imageUrls: opts.imageUrls.length ? opts.imageUrls : opts.urls } }];
  }
  if (feature === "seedance") {
    if (opts.taskId) return [{ title: "Seedance query", transport: "form", endpoint: "/tool/video/seedance/query", fields: { key, taskId: opts.taskId } }];
    return [{ title: "Seedance generate", transport: "form", endpoint: "/tool/video/seedance/generate", fields: { key, prompt: opts.prompt, model: opts.model || "Doubao-Seedance-2.0", resolution: opts.resolution, ratio: opts.aspectRatio, duration: opts.duration || "-1" }, params: { referenceImageUrls: opts.imageUrls, referenceVideoUrls: opts.videoUrls, referenceAudioUrls: opts.audioUrls } }];
  }
  if (feature === "douyin") return douyinPlan(opts, key).map((item) => ({ ...item, transport: "json", params: item.body }));
  if (feature === "rednote") return [{ title: "小红书笔记采集", transport: "query", endpoint: "/tool/rednote/xhs_note_content", params: { key, note_url: opts.url || extractFirstUrl(opts.text) } }];
  if (feature === "bilibili") return [{ title: "B站视频数据采集", transport: "query", endpoint: "/tool/bilibili/bilibili_video_data", params: { key, video_url: opts.url || extractFirstUrl(opts.text) } }];
  if (feature === "transcript") return [{ title: "音视频转文字", transport: "query", endpoint: "/tool/speech/speechToText", params: { key, file_url: opts.fileUrl || "", video_url: opts.videoUrl || opts.url || extractFirstUrl(opts.text) } }];
  if (feature === "rednote-seed-code") return [{ title: "小红书种草码", transport: "query", endpoint: "/tool/rednote/rednote_publish", params: { key, type: opts.mode || "normal", title: opts.title, content: opts.content, images: opts.imageUrls.length ? opts.imageUrls : opts.urls, video: opts.videoUrl, cover: optionValue(args, "--cover", "") } }];
  if (feature === "happyhorse") {
    return [{ title: "HappyHorse 1.0", unsupported: true, reason: "HotBee public bundle and /catalog/apis anonymous response do not expose a HappyHorse endpoint. Use this skill as guidance until the HotBee endpoint contract is provided." }];
  }
  if (feature === "hot-rankings") {
    return [{ title: "全网热榜", unsupported: true, reason: "HotBee public bundle and /catalog/apis anonymous response do not expose a hot-rankings endpoint. The skill provides AI browsing/search workflow guidance instead of a fake API call." }];
  }
  throw new Error(`Unknown feature: ${feature}`);
}

function requestNeedsKey(request) {
  return JSON.stringify(request.params || request.fields || {}).includes('"key"');
}

async function executeRequest(request, opts) {
  if (request.transport === "json") return postJson(request.endpoint, request.params || {});
  if (request.transport === "query") return postQuery(request.endpoint, request.params || {});
  if (request.transport === "form") return postForm(request.endpoint, request.fields || {}, request.params || {});
  throw new Error(`Unsupported transport: ${request.transport}`);
}

function render(result, opts) {
  const safe = redact(result);
  if (opts.format === "json") return `${JSON.stringify(safe, null, 2)}\n`;
  const lines = [`# ${safe.title}`, "", `- Feature: \`${safe.feature}\``, `- Mode: ${opts.dryRun ? "dry-run" : "live"}`];
  for (const item of safe.results) {
    lines.push("", `## ${item.title}`);
    if (item.unsupported) {
      lines.push(`- Status: unsupported`, `- Reason: ${item.reason}`);
      continue;
    }
    lines.push(`- Endpoint: \`${item.endpoint}\``, `- Transport: ${item.transport}`, `- Status: ${item.status || "ready"}`);
    if (item.skipped) lines.push(`- Reason: ${item.reason}`);
    lines.push("", "```json", JSON.stringify(item.request || item.response || {}, null, 2), "```");
  }
  return `${lines.join("\n")}\n`;
}

function writeOut(file, content, format) {
  const bom = process.platform === "win32" && format !== "json" ? "\uFEFF" : "";
  fs.writeFileSync(file, `${bom}${content}`, "utf8");
}

async function callCommand() {
  const feature = normalizeFeature(args[1] || "");
  if (!FEATURES[feature]) throw new Error(`Unknown feature: ${args[1] || ""}`);
  const opts = parseOptions(args.slice(2));
  const key = keyFor(feature, opts);
  const requests = buildRequests(feature, opts, key);
  const results = [];
  for (const request of requests) {
    if (request.unsupported) {
      results.push(request);
      continue;
    }
    const envelope = { title: request.title, endpoint: request.endpoint, transport: request.transport, request: { params: request.params, fields: request.fields } };
    if (requestNeedsKey(request) && !key && !opts.dryRun) {
      results.push({ ...envelope, skipped: true, status: "missing-key", reason: `Set one of: ${FEATURES[feature].keyEnv.join(", ")}` });
      continue;
    }
    if (opts.dryRun) {
      results.push({ ...envelope, status: "dry-run" });
      continue;
    }
    const response = await executeRequest(request, opts);
    results.push({ ...envelope, status: `HTTP ${response.httpStatus}`, response: response.data });
  }
  const output = { title: FEATURES[feature].title, feature, results };
  const rendered = render(output, opts);
  if (opts.out) writeOut(opts.out, rendered, opts.format);
  process.stdout.write(rendered);
}

try {
  if (command === "help" || command === "--help" || command === "-h") usage();
  else if (command === "list") listCommand();
  else if (command === "install") installCommand();
  else if (command === "call") await callCommand();
  else {
    usage();
    process.exitCode = 1;
  }
} catch (error) {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
}
