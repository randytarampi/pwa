gen_enforced_field(WorkspaceCwd, 'engines.node', '>=20') :-
  workspace_ident(WorkspaceCwd, _).

gen_enforced_dependency(WorkspaceCwd, '@randy.tarampi/android-icons', 'workspace:*', DependencyType) :-
  workspace_has_dependency(WorkspaceCwd, '@randy.tarampi/android-icons', _, DependencyType).

gen_enforced_dependency(WorkspaceCwd, '@randy.tarampi/android-splash', 'workspace:*', DependencyType) :-
  workspace_has_dependency(WorkspaceCwd, '@randy.tarampi/android-splash', _, DependencyType).

gen_enforced_dependency(WorkspaceCwd, '@randy.tarampi/generic-icon-splash-generate', 'workspace:*', DependencyType) :-
  workspace_has_dependency(WorkspaceCwd, '@randy.tarampi/generic-icon-splash-generate', _, DependencyType).

gen_enforced_dependency(WorkspaceCwd, '@randy.tarampi/ios-icons', 'workspace:*', DependencyType) :-
  workspace_has_dependency(WorkspaceCwd, '@randy.tarampi/ios-icons', _, DependencyType).

gen_enforced_dependency(WorkspaceCwd, '@randy.tarampi/ios-splash', 'workspace:*', DependencyType) :-
  workspace_has_dependency(WorkspaceCwd, '@randy.tarampi/ios-splash', _, DependencyType).

gen_enforced_dependency(WorkspaceCwd, '@randy.tarampi/pwa-asset-generator', 'workspace:*', DependencyType) :-
  workspace_has_dependency(WorkspaceCwd, '@randy.tarampi/pwa-asset-generator', _, DependencyType).

gen_enforced_dependency(WorkspaceCwd, 'chai', '^6.2.2', 'devDependencies') :-
  workspace_has_dependency(WorkspaceCwd, 'chai', _, 'devDependencies').

gen_enforced_dependency(WorkspaceCwd, 'eslint', '^10.5.0', 'devDependencies') :-
  workspace_has_dependency(WorkspaceCwd, 'eslint', _, 'devDependencies').

gen_enforced_dependency(WorkspaceCwd, 'tape', '^5.10.2', 'devDependencies') :-
  workspace_has_dependency(WorkspaceCwd, 'tape', _, 'devDependencies').

gen_enforced_field('.', resolutions, "{\"immutable\":\"^5.1.7\"}").

gen_enforced_field(WorkspaceCwd, resolutions, "{}") :-
  workspace_ident(WorkspaceCwd, Ident),
  Ident \= pwa,
  workspace_field(WorkspaceCwd, resolutions, _).
