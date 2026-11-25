const LINE = "Your codebase is so fragile the linter has started filing workers comp claims.";

function renderLine(shout: boolean): string {
  return shout ? LINE.toUpperCase() : LINE;
}

const flags = new Set(process.argv.slice(2));

function hasFlag(flag: string): boolean {
  return flags.has(flag);
}

function usage(): string {
  return "Usage: node main.ts [--shout] [--help]\n\n  --shout   Print the line in uppercase\n  --help    Show this help text";
}

function main(): void {
  const args = process.argv.slice(2);

  for (const arg of args) {
    if (arg === "--help") {
      process.stderr.write(usage() + "\n");
      process.exit(0);
    }
    if (arg !== "--shout") {
      process.stderr.write(`Unknown option: ${arg}\n\n${usage()}\n`);
      process.exit(2);
    }
  }

  console.log(renderLine(hasFlag("--shout")));
}

main();
